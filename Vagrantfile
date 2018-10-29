# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "bento/fedora-28"

  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "172.16.0.128"

  config.vm.synced_folder "_site/", "/usr/share/nginx/html", mount_options: ['dmode=777','fmode=666']

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end
end
