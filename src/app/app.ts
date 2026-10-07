import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider-component/main-slider-component.component';
import { ProductCardComponent, Product } from './product-card-component/product-card-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainSliderComponent, ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    {
      id: 1,
      title: 'Medicube Pink Serum',
      price: 15.99,
      description: 'Helps with uneven skin tone, repairing the skin barrier, and minimizes pores. \n Target all of your major concerns (and then some) with the best skin care products of 2026.',
      image: 'https://i.pinimg.com/736x/62/24/d8/6224d8aaba3925b68c4de7c54f40e7ae.jpg'
     },
    {
      id: 2,
      title: 'Anua Peach 70 Niacinamide Serum',
      price: 15.99,
      description: 'Designed to unveil glass skin both instantly and progressively.\n This peach-infused serum brightens dull skin, provides gentle texture care for a radiant complexion.',
      image: 'https://i.pinimg.com/736x/09/2b/e9/092be9ff0b021f0a3cb710cb475a5f10.jpg'
    },
    {
      id: 3,
      title: 'Centerlla SunSerum',
      price: 15.99,
      description: 'SKIN1004 Madagascar Centella Hyalu-Cica Water Fit Sun Serum is a lightweight and hydrating Korean sunscreen that provides the skin with protection against UV rays. ',
      image: 'https://i.pinimg.com/1200x/ed/9f/59/ed9f59ddb976abcbbe97b2ea642b221a.jpg'
    },
    {
      id: 4,
      title: 'Hyaluronic Acid Watery Sun Gel',
      price: 19.99,
      description: 'The Hyaluronic Acid Watery Sun Gel makes hydrating sun care possible, every day of the year. It is a daily moisturizing sunscreen that makes you feel the shielding hydration of moisturizing cream. ',
      image: 'https://i.pinimg.com/736x/4d/aa/c4/4daac40c00d168a04ddc0c7e04652b5a.jpg'
    },
    
    {
      id: 5,
      title: 'BALANCEFUL Cica Serum',
      price: 20.00,
      description: "Torriden’s award-winning BALANCEFUL Cica Serum features the viral K-Beauty ingredient, cica, to provide soothing hydration while balancing excess sebum production and softening rough texture in acne-prone skin types.",
      image: 'https://i.pinimg.com/1200x/75/41/ff/7541ff4b81e14a77ea8427fc618b347e.jpg' ,
    },
    {
      id: 6,
      title: 'Medicube Red Succinic Acid Peeling Pad',
      price: 30.00,
      description: 'Medicube Red Succinic Acid Peeling Pad, 70 Pads Red Succinic Acid Peeling Pads are dual-sided exfoliating pads infused with succinic acid,\n AHA, BHA, and PHA to gently exfoliate dead skin cells, unclog pores, and improve skin texture.',
      image: 'https://i.pinimg.com/736x/6d/eb/69/6deb695dc8062d119cb7f4dd3b53c408.jpg' 
    },
    {
      id: 7,
      title: 'Dove Sakura Body Scrub',
      price: 20.00,
      description: 'Dove Sakura Body Scrub 280g - Ice Cream Texture with Niacinamide for Brightening & Moisturizing - Gentle Exfoliating Beads for Soft Glowing Skin ',
      image: 'https://i.pinimg.com/736x/9e/44/a8/9e44a8c8af8cd2ef82cc5a5fc5f94c73.jpg' 
    },
    {
      id: 8,
      title: 'Anau Pron Hyarolunic Acid',
      price: 30.00,
      description: "the stive season is creeping ever closer, and with holiday parties, winter gatherings, last-minute travel, and the general whirlwind of December, finding the perfect gifts can easily slip down the to-do list. Whether you're still hunting for thoughtful presents for loved ones – or simply hoping..",
      image: 'https://i.pinimg.com/1200x/ee/2c/6d/ee2c6dc80f6c8342df2726de8d02456c.jpg'
    },
    {
      id: 9,
      title: 'Celimax The Vita-A Retinal', 
      price: 30.00,
      description: 'Going viral on social media, Celimax The Vita-A Retinal Shot Tightening Booster harnesses the power of retinal to fill in wrinkles.',
      image: 'https://i.pinimg.com/736x/3c/ce/68/3cce688318700a4b1f32da91896e9458.jpg'
    },
    {
      id: 10,
      title: 'Centella Poremizing Fresh Ampoule',
      price: 25.00,
      description: ' Centella Poremizing Fresh Ampoule. Si quieres mejorar la elasticidad de tu piel, reafirmarla y minimizar la apariencia de los poros, este suero es para ti.',
      image: 'https://i.pinimg.com/1200x/b0/07/26/b00726e18dc2b7dbd24865f7c1b8db85.jpg'
    },
     {
      id: 11,
      title: 'Centella Poremizing Fresh Ampoule',
      price: 30.00,
      description: ' Centella Poremizing Fresh Ampoule. Si quieres mejorar la elasticidad de tu piel, reafirmarla y minimizar la apariencia de los poros, este suero es para ti.',
      image: 'https://i.pinimg.com/1200x/25/6a/23/256a23876ebc883ee49b28d082f58781.jpg'
    },
     {
      id: 12,
      title: 'Centella Poremizing Fresh Ampoule',
      price: 25.00,
      description: ' Centella Poremizing Fresh Ampoule. Si quieres mejorar la elasticidad de tu piel, reafirmarla y minimizar la apariencia de los poros, este suero es para ti.',
      image: 'https://i.pinimg.com/736x/29/d8/4f/29d84fdb3b81b4bf65214745b927c18b.jpg'
    }
    

  ];
}
