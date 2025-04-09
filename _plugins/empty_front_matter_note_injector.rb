# frozen_string_literal: true

EMPTY_FRONT_MATTER = <<~JEKYLL
  ---
  ---

JEKYLL


Jekyll::Hooks.register :site, :after_init do |site|
  Dir.glob(site.collections['posts'].relative_directory + '/**/*.md').each do |filename|
    raw_post_content = File.read(filename)
    unless raw_post_content.start_with?('---')
      raw_post_content.prepend(EMPTY_FRONT_MATTER)
      File.write(filename, raw_post_content)
    end
  end
end
