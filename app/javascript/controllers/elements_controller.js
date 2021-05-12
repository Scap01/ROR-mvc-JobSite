import ApplicationController from './application_controller'


export default class extends ApplicationController {
  sort() {
      let element = document.getElementById('elements')
      let elements_items = Array.from(document.getElementsByClassName('element-item'))
      let elements = elements_items.map((element, index) => {
          return {id: element.dataset.id, position: index+1 }
      })
      console.log(elements)

      element.dataset.elements = JSON.stringify(elements)

      this.stimulate('ElementsReflex#sort', element)
    }
}