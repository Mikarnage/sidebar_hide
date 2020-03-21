# encoding: utf-8
require_dependency 'sidebar_hook_listener'

Redmine::Plugin.register :sidebar_hide do
  name 'Sidebar Hide Plugin'
  author 'Berk Demirkır, Massimo Rossello'
  description 'This plugin provides ability to hide sidebar'
  version '1.0.0'
  url 'https://github.com/maxrossello/sidebar_hide'
  author_url 'https://github.com/maxrossello'
end
