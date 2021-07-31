# encoding: utf-8
require_dependency 'sidebar_hook_listener'

Redmine::Plugin.register :sidebar_hide do
  name 'Sidebar Hide Plugin'
  author 'Berk Demirkır, Massimo Rossello'
  description 'This plugin provides ability to hide sidebar'
  version '4.2.1'
  url 'https://github.com/maxrossello/sidebar_hide'
  author_url 'https://github.com/maxrossello'
  requires_redmine :version_or_higher => '4.2.0'
end
