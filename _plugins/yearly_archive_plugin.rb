# Jekyll plugin to create yearly archive pages
#
# George Perez-Marrero, July 2017
# Copyright notice (MIT License) attached at the end of this file
#

#
# This code is based on the following works:
#   https://github.com/shigeya/jekyll-monthly-archive-plugin
#

#
# Archive will be written as #{archive_path}/#{year}/index.html
# archive_path can be configured in 'path' key in 'monthly_archive' of
# site configuration file. 'path' is default null.
#

module Jekyll

  module YearlyArchiveUtil
    def self.archive_base(site)
      site.config['yearly_archive'] && site.config['yearly_archive']['path'] || ''
    end
  end

  # Generator class invoked from Jekyll
  class YearlyArchiveGenerator < Generator
    def generate(site)
      posts_group_by_year(site).each do |y, list|
        site.pages << YearlyArchivePage.new(site, YearlyArchiveUtil.archive_base(site),
                                             y[0], list)
      end
    end

    def posts_group_by_year(site)
      site.posts.docs.each.group_by { |post| [post.date.year] }
    end

  end

  # Actual page instances
  class YearlyArchivePage < Page

    ATTRIBUTES_FOR_LIQUID = %w[
      year,
      date,
      content
    ]

    def initialize(site, dir, year, posts)
      @site = site
      @dir = dir
      @year = year
      @archive_dir_name = 'blog/%04d' % [year]
      @date = Date.new(@year)
      @layout =  site.config['yearly_archive'] && site.config['yearly_archive']['layout'] || 'yearly_archive'
      self.ext = '.html'
      self.basename = 'index'
      self.content = <<-EOS
{% for post in page.posts %}<li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <span class="post-date"><span> &bull; </span><time datetime="{{ post.date }}" pubdate="pubdate">{{ post.date | date:"%B %-d, %Y" }}</time></span></li>
{% endfor %}
      EOS
      self.data = {
          'layout' => @layout,
          'type' => 'archive',
          'title' => "Archive: #{@year}",
          'posts' => posts,
          'url' => File.join('/',
                     YearlyArchiveUtil.archive_base(site),
                     @archive_dir_name, 'index.html')
      }
    end

    def render(layouts, site_payload)
      payload = {
          'page' => self.to_liquid,
          'paginator' => pager.to_liquid
      }.merge(site_payload)
      do_layout(payload, layouts)
    end

    def to_liquid(attr = nil)
      self.data.merge({
                               'content' => self.content,
                               'date' => @date,
                               'year' => @year
                           })
    end

    def destination(dest)
      File.join('/', dest, @dir, @archive_dir_name, 'index.html')
    end

  end
end

# The MIT License (MIT)
#
# Copyright (c) 2017 George Perez-Marrero
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
