import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  pcdetails= [
    {
      id:1,
      pcName:"Pc Gamer T-GAMER TecnoArt Builds AMD Ryzen 5 4600G / 16GB (2x8GB) DDR4 / SSD 240GB",
      pcPreco:"1.615.99",
      pcjuros: "12x de R$ 158,40 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/p/pc-gamer-t-gamer-tecnoart-builds-amd-ryzen-5-4600g-16gb-2x8gb-ddr4-ssd-240gb_171807.jpg"
    },
    {
      id:2,
      pcName:"Computador T-Home Create AMD Ryzen 5 4600G / 8GB DDR4 / SSD 240GB",
      pcPreco:"1.426,70",
      pcjuros: "12x de R$ 139,87 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/p/computador-t-home-crate-amd-ryzen-5-4600g-ddr4-8gb-ssd-240gb_172364.jpg"
    },
    {
      id:3,
      pcName:"PC Gamer T-GAMER Vector Ryzen 5 4600G / 16GB (2x8GB) DDR4 / SSD 480GB",
      pcPreco:"1.726,60",
      pcjuros: "12x de R$ 169,27 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/p/pc-gamer-t-gamer-vector-ryzen-5-4600g-16gb-2x8gb-ddr4-ssd-480gb_171792.jpg"
    },
    {
      id:4,
      pcName:"Computador T-HOME Executor AMD Ryzen 7 5700G / 8GB DDR4 / SSD 240GB",
      pcPreco:"2.466,69",
      pcjuros: "12x de R$ 241,83 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/g/computador-t-home-executor-amd-ryzen-7-5700g-ddr4-8gb-ssd-240gb_171819.jpg"
    },
    {
      id:5,
      pcName:"PC Gamer T-GAMER Chronos Intel i9 10900 / NVIDIA GeForce RTX 4070 Ti / 16GB (2x8GB) DDR4 / SSD NVMe 240GB",
      pcPreco:"10.554,59",
      pcjuros: "12x de R$ 1.034,76 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/g/pc-gamer-t-gamer-chronos-intel-i9-10900-nvidia-geforce-rtx-4070-ti-16gb-2x8gb-ddr4-ssd-nvme-240gb_172086.png"
    },
    {
      id:6,
      pcName:"PC Gamer T-GAMER Hawk Intel Core i5 10400 / AMD Radeon RX 6700 XT / 16GB (2x8GB) DDR4 / SSD 240GB",
      pcPreco:"5.293,11",
      pcjuros: "12x de R$ 518,93 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/g/pc-gamer-t-gamer-hawk-intel-core-i5-10400-amd-radeon-rx-6700-xt-16gb-2x8gb-ddr4-ssd-240gb_171565.jpg"
    },
    {
      id:7,
      pcName:"PC Gamer T-Gamer Flame AMD Ryzen 7 5700X / NVIDIA GeForce RTX 3060 / 16GB (2x8GB) DDR4 / SSD NVMe 480GB",
      pcPreco:"6.044,59",
      pcjuros: "12x de R$ 592,61 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/g/pc-gamer-t-gamer-flame-amd-ryzen-7-5700x-nvidia-geforce-rtx-3060-16gb-2x8gb-ddr4-ssd-nvme-480gb_172088.jpg"
    },
    {
      id:8,
      pcName:"PC Gamer T-GAMER Highlander Intel i5 11600K / NVIDIA GeForce RTX 4070 Ti / 16GB (2x8GB) DDR4 / SSD 240GB",
      pcPreco:"9.764,59",
      pcjuros: "12x de R$ 957,31 sem juros",
      pcImg:"https://img.terabyteshop.com.br/produto/g/computador-t-gamer-highlander-intel-i5-11600k-nvidia-geforce-rtx-4070-ti-ddr4-16gb-2x8-ssd-240gb_164967.png"
    }
  ]

  cdDetails = [
    {
     id: 1,
      cdName: "Cadeira Gamer SuperFrame Godzilla, Reclinável, Preto e Cinza",
      cdPreco:"669,90",
      cdjuros:"12x de R$ 65,68 sem juros",
      cdImg:"https://img.terabyteshop.com.br/produto/g/cadeira-gamer-superframe-godzilla-reclinavel-preto-e-cinza_161011.png"
    },
    {
      id: 2,
       cdName: "Cadeira Gamer SuperFrame Hunter, Reclinável, Black e Red",
       cdPreco:"599,00",
       cdjuros:"12x de R$ 58,73 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/g/cadeira-gamer-superframe-hunter-reclinavel-suporta-ate-140kg-preto-e-vermelho_153797.jpg"
     },
     {
      id: 3,
       cdName: "Cadeira Gamer SuperFrame Knight, Reclinável, Preto e Branco",
       cdPreco:"799,90",
       cdjuros:"12x de R$ 78,42 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/p/cadeira-gamer-superframe-knight-reclinavel-suporta-ate-140kg-preto-e-branco_158302.png"
     },
     {
      id: 4,
       cdName: "Cadeira Gamer SuperFrame Knight, Reclinável, Preto e Azul",
       cdPreco:"599,90",
       cdjuros:"12x de R$ 58,81 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/p/cadeira-gamer-superframe-knight-reclinavel-suporta-ate-140kg-preto-e-azul_158316.png"
     },
     {
      id: 5,
       cdName: "Cadeira Gamer Terabyte Vision, Reclinável, 2D, Preto e Azul",
       cdPreco:"569,90",
       cdjuros:"12x de R$ 55,87 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/g/cadeira-gamer-terabyte-vision-reclinavel-2d-preto-e-azul_167277.png"
     },
     {
      id: 6,
       cdName: "Cadeira Gamer Terabyte Razor, Reclinável, Preto e Branco",
       cdPreco:"949,90",
       cdjuros:"12x de R$ 93,13 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/p/cadeira-gamer-terabyte-razor-reclinavel-suporta-ate-150kg-preto-e-branco_158491.jpg"
     },
     {
      id: 7,
       cdName: "Cadeira Gamer SuperFrame Mesh, Reclinável, Preto",
       cdPreco:"849,90",
       cdjuros:"12x de R$ 83,32 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/p/cadeira-gamer-superframe-mesh-reclinavel-suporta-ate-140kg-preto_158323.png"
     },
     {
      id: 8,
       cdName: "Cadeira Gamer Terabyte Vision, Reclinável, 2D, Preto e Verde",
       cdPreco:"569,90",
       cdjuros:"12x de R$ 55,87 sem juros",
       cdImg:"https://img.terabyteshop.com.br/produto/p/cadeira-gamer-terabyte-vision-reclinavel-2d-preto-e-verde_167297.png"
     }
  ]
}
