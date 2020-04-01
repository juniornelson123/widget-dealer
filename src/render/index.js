import html from './index.html';
import './index.css';

let elements = [];
let container;
const BASE_API_URL = 'https://api.carhoo.com.br/'

export function render(params) {
  if(params.responsive === true) {
    require('../styles/responsive.css');
  }

  
    if(!params.client_id)
      return console.error("client_id") 
      

    let content = document.createElement('div');
    content.innerHTML = html;
  
    let randomPage = Math.floor(Math.random() * 1);
    let showcases = `${BASE_API_URL}showcases?pagina=${randomPage}&per_page=16&client_id[]=${params.client_id}&vehicle_condition=0`;
  
    fetch(showcases)
      .then((res) => res.json())
      .then((data) => {
        const templates = data
        let render = templates.map(item => {
          return `<div class="carhoo-store-list_item">
          <a href="https://carhoo.com.br/comprar/novos/${item.id}" title="${item.vehicle.make_name} ${item.vehicle.model_name}" target="_blank">
              <figure class="item-image" style="background-image: url('${
                item.vehicle.image_url
              }')"></figure>
              </a>
              <div class="item-info">
              <h3 class="title">
                  <a href="https://carhoo.com.br/comprar/novos/${
                    item.id
                  }" title="${item.vehicle.make_name} ${item.vehicle.model_name}" target="_blank">
                      ${item.vehicle.make_name} <strong>${item.vehicle.model_name}</strong>
                  </a>
              </h3>
              <div class="item-info_top">
                  <span>${item.vehicle.manufacture_year}/${
            item.vehicle.model_year
          }</span>
                  <span>${item.vehicle.city_name}/${
            item.vehicle.state_acronym
          }</span>
              </div>
                  <div class="item-info_bottom">
                      <h4 class="price">R$ ${item.price.toLocaleString(
                        "pt-BR"
                      )}</h4>
                  </div>
              </div>
          </div>`;            
      })
      document.getElementsByClassName('carhoo-store-list_tracker')[0].innerHTML = render.join('')
    })
    .catch((error) => {
        let templateError = `
        <div class="carhoo-store-error">
            Houve um problema na conexão, tente atualizar a página
        </div>`;
        document.getElementsByClassName('carhoo-store-list_tracker')[0].innerHTML = templateError
        console.warn(error);
    });
    
    container = document.getElementsByClassName('carhoo-dealer')[0];
  
    while (content.children.length > 0) {
        elements.push(content.children[0]);
        container.appendChild(content.children[0]);
    }

}