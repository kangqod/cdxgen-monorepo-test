#!/bin/bash

GREEN='\033[1;32m'
NO_COLOR='\033[0m'

function print_color_text() {
  TITLE=$1
  echo -e "\n${GREEN}>>>> ${TITLE} ${NO_COLOR}\n"
}

function remove_all() {
  print_color_text "node_modules remove start."
  find . -name "node_modules" -type d -prune -print -exec rm -rf "{}" \;
  print_color_text "node_modules remove end."
}

function install_all() {
  print_color_text "package install start."
  pnpm install
  print_color_text "package install end."
}

function build_all() {
  print_color_text "package build start."
  pnpm build-packages:all
  print_color_text "package build end."
}

function initialize() {
  while getopts ":y" opt; do
    case $opt in
    y)
      echo "  -y flag detected. Removing and installing node_modules..."
      remove_all
      install_all
      exit 0
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    esac
  done

  shift "$((OPTIND - 1))"

  echo
  read -n 1 -p "Are you sure you want to remove all node_modules?: (y/N)? " yn
  echo
  if [[ $yn =~ ^[Yy]$ ]]; then
    remove_all
    install_all
    # build_all
  else
    print_color_text "Canceled."
  fi
}

initialize "$@"
