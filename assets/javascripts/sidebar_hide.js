// the key to use in local storage
// this will later be expanded using the current controller and action to
// allow for different sidebar states for different pages
var sideBarLocalStorageKey = 'redmine-sidebar-state';

// whether can persist sidebar status (for each page)
var canUseLocalStorage = false;

function canUseLocalStorageCheck() {
  try {
    if('localStorage' in window) {
      localStorage.setItem('redmine.test.storage', 'ok');
      var item = localStorage.getItem('redmine.test.storage');
      localStorage.removeItem('redmine.test.storage');
      if(item === 'ok') return true;
    }
  } catch (err) {}
  return false;
}

function setState(state) {
  if(canUseLocalStorage) {
    localStorage.setItem(sideBarLocalStorageKey, state);
  }
};

function setSideBarHidden()
{
    $('#sidebar').addClass('sidebar_hidden');
    $('#content').addClass('sidebar_hidden');
    $('#hideSidebarButton').addClass('sidebar_hidden');
    setState('hidden');
}

function setSideBarVisible()
{
    $('#sidebar').removeClass('sidebar_hidden');
    $('#content').removeClass('sidebar_hidden');
    $('#hideSidebarButton').removeClass('sidebar_hidden');
    setState('visible');
}

function hideSideBar()
{
    if ($('#sidebar').is(':visible')) {
        setSideBarHidden();
    } else {
        setSideBarVisible();
    }
}

$(function() {
    $('#context-menu').appendTo('#main');
});


function prepareHideSideBar() {
    canUseLocalStorage = canUseLocalStorageCheck();
    
    // determine previously stored sidebar state for this page
    if(canUseLocalStorage) {
        // determine current controller/action pair and use them as storage key
        var bodyClass = $('body').attr('class');
        if(bodyClass) {
            try {
                sideBarLocalStorageKey += '-' + bodyClass.split(/\s+/).filter(function(s){
                    return s.match(/(action|controller)-.*/);
                }).sort().join('-');
            } catch(e) {
                // in case of error (probably IE8), continue with the unmodified key
            }
        }
        var storedState = localStorage.getItem(sideBarLocalStorageKey);
        if (storedState === 'hidden') {
            setSideBarHidden();
        }
        else {
        	setSideBarVisible();
        }
    }
};

