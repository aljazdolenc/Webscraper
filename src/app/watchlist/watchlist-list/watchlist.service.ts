import { WatchlistGroup, WatchlistTemplate } from './../../shared/watchlist.model';
import { Injectable } from '@angular/core';
import { CardDeals } from 'src/app/shared/card-deals.interface';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  watchlistArray: WatchlistGroup[] = [
    new WatchlistGroup(
      new WatchlistTemplate('PC 3070', 500, 1500, 'EU', 'all'),
      [new CardDeals(
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
        "Gigabyte's GeForce RTX 3080 Gaming OC",
        699.99,
        "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
      new CardDeals(
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
        "Gigabyte's GeForce RTX 3080 Gaming OC",
        699.99,
        "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
      new CardDeals(
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
        "Gigabyte's GeForce RTX 3080 Gaming OC",
        699.99,
        "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
      new CardDeals(
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
        "Gigabyte's GeForce RTX 3080 Gaming OC",
        699.99,
        "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza")]),
        new WatchlistGroup(
          new WatchlistTemplate('PC 3070', 500, 1500, 'EU', 'all'),
          [new CardDeals(
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
            "Gigabyte's GeForce RTX 3080 Gaming OC",
            699.99,
            "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
          new CardDeals(
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
            "Gigabyte's GeForce RTX 3080 Gaming OC",
            699.99,
            "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
          new CardDeals(
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
            "Gigabyte's GeForce RTX 3080 Gaming OC",
            699.99,
            "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza"),
          new CardDeals(
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Gigabyte_RTX_3080_deal_price_amazon_GPU_graphics_card.jpg",
            "Gigabyte's GeForce RTX 3080 Gaming OC",
            699.99,
            "https://www.mimovrste.com/graficne-kartice/evga-geforce-rtx-3080-ftw3-ultra-gaming-graficna-kartica-10-gb-gddr6x-lhr-10g-p5-3897-kl-odprta-embalaza")]
        )
  ]
  constructor() { }
  getWatchlistArrays(){
    return this.watchlistArray.slice();
  }
}
