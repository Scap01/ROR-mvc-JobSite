// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import '../stylesheets/application'

require("trix")
require("@rails/actiontext")



document.addEventListener('turbolinks:load', () => {
    document.addEventListener('click', () => {
      let element = event.target.closest('.paragraph-content')
      if (!element) return;
  
      element.classList.add('d-none')
      element.nextElementSibling.classList.remove('d-none')
    })
  
    document.addEventListener('click', () => {
      if (!event.target.matches('.cancel')) return;
  
      event.preventDefault();
  
      let element = event.target.closest('.paragraph-form')
  
      element.classList.add('d-none')
      element.previousElementSibling.classList.remove('d-none')
    })
  })
import "controllers"
