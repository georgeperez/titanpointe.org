require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = { :http_status_ignore => [999], :assume_extension => true, :empty_alt_ignore => true, :check_opengraph => true, :enforce_https => true, :disable_external => true}
  HTMLProofer.check_directory("./_site", options).run
end
