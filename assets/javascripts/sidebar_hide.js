// the key to use in local storage
// this will later be expanded using the current controller and action to
// allow for different sidebar states for different pages
var sideBarLocalStorageKey = 'redmine-sidebar-state';

// whether can persist sidebar status (for each page)
var canUseLocalStorage = false;

// current sidebar visibility status
var storedState = 'visible';

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
  storedState = state;
};

function setSideBarHidden()
{
    $('#sidebar').addClass('sidebar_hidden');
    $('#content').addClass('sidebar_hidden');
    $('#hideSidebarButton').addClass('sidebar_hidden');
}

function setSideBarVisible()
{
    $('#sidebar').removeClass('sidebar_hidden');
    $('#content').removeClass('sidebar_hidden');
    $('#hideSidebarButton').removeClass('sidebar_hidden');
}

function toggleSideBar()
{
    if (storedState == 'visible') {
        setSideBarHidden();
        setState('hidden');
    } else {
        setSideBarVisible();
        setState('visible');
    }
}

function setSideBar(state)
{
    if (state == 'visible') {
        setSideBarVisible();
    } else {
        setSideBarHidden();
    }
}


function prepareHideSideBar() {

    $('#context-menu').appendTo('#main');

    canUseLocalStorage = canUseLocalStorageCheck();
    
    if( $('#main').css('flex-direction') == 'row-reverse' )
    {
        // right hand sidebar
        $('#sidebarHandler').css('float', 'right');
        $('#sidebarHandler').css('right', '0px');
        $('#sidebarHandler').css('margin-right', '7px');
    }
    else
    {
        // left hand sidebar
        $('#sidebarHandler').css('float', 'left');
        $('#sidebarHandler').css('left', '0px');
        //$('#sidebarHandler').css('margin-left', '7px');
        $('#hideSidebarButton').css('transform', 'scaleX(-1)');
        $('.sidebar-toggler').css('display', 'none');
        $('#sidebar ul li a').css('padding-left', '6px !important');
    }
    
    $('#sidebar').hover(function() {
        setSideBarVisible();
    }, function() {
        setSideBar(storedState);
    })

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
        storedState = localStorage.getItem(sideBarLocalStorageKey);
        setSideBar(storedState);
    }
};

