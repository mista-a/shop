const fs = require('fs');

let data = [
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/4b/f5/4bf53236eacea3a6ae70cc9749ec25f00547170d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Short-sleeved Linen-blend Shirt',
    price: 24.99,
    colors: ['rgb(132, 124, 97)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4b%2Ff5%2F4bf53236eacea3a6ae70cc9749ec25f00547170d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/4c/51/4c511a58ae2c387ddb904e3702ca175d4f5d9613.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Linen-blend Overshirt',
    price: 34.99,
    colors: ['rgb(232, 228, 213)', 'rgb(133, 125, 108)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4c%2F51%2F4c511a58ae2c387ddb904e3702ca175d4f5d9613.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd4%2F62%2Fd462c179d9f24765ce6c706f20c86fbf88c5c23d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/f9/9b/f99bc072e095872384508d4819ed1e468b334a73.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Short-sleeved Linen-blend Shirt',
    price: 24.99,
    colors: ['rgb(174, 158, 124)', 'rgb(130, 158, 195)', 'rgb(218, 218, 205)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3d%2F40%2F3d40a908f7db65fbf34e66e98e30b296bb20ba39.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_shortsleeved%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff9%2F9b%2Ff99bc072e095872384508d4819ed1e468b334a73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9c%2F01%2F9c01a01be97373538788af061a46cd1e16e28e21.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/c7/4dc768677ab1ed2dbfaae5d038813806a266beea.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Patterned Cotton Shorts',
    price: 29.99,
    colors: ['rgb(133, 125, 108)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4d%2Fc7%2F4dc768677ab1ed2dbfaae5d038813806a266beea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/9f/93/9f93774e6c1171b7e5e1c64135f8fc0599984f8f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Patterned Cotton T-shirt',
    price: 17.99,
    colors: ['rgb(133, 125, 108)', 'rgb(213, 82, 49)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1f%2Fdf%2F1fdfd0cfd672f2a9b28a588680960a6c2f4597cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F93%2F9f93774e6c1171b7e5e1c64135f8fc0599984f8f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/ed/6aedb949f3e2e3d97676381085a83be3fcb5e1d7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Water-repellent Anorak',
    price: 49.99,
    colors: ['rgb(143, 148, 137)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6a%2Fed%2F6aedb949f3e2e3d97676381085a83be3fcb5e1d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/76/46/7646aea90d592b9ed52c7d2bb6fb59f4f5a54478.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Linen-blend Shorts',
    price: 24.99,
    colors: ['rgb(174, 158, 124)', 'rgb(218, 218, 205)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe1%2F1d%2Fe11db792e546a524e9b935040dbda730ba446c13.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F76%2F46%2F7646aea90d592b9ed52c7d2bb6fb59f4f5a54478.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/7d/f0/7df09e86a3640bcdda47590e52b3c62e507405b7.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Short-sleeved Cotton Shirt',
    price: 19.99,
    colors: ['rgb(63, 64, 66)', 'rgb(152, 86, 79)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7d%2Ff0%2F7df09e86a3640bcdda47590e52b3c62e507405b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F50%2F32%2F5032ada451216a5c760eb464f00d306e975af9f0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/66/8d/668d382f61eb6e031d028430d952dbcc754437e5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Relaxed Fit Linen-blend Shorts',
    price: 29.99,
    colors: ['rgb(132, 124, 97)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F66%2F8d%2F668d382f61eb6e031d028430d952dbcc754437e5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/4d/4e/4d4ed57af6f0e46350a95b7d7d715d4a4a2c2e08.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Regular Fit Linen-blend Shirt',
    price: 24.99,
    colors: [
      'rgb(239, 239, 223)',
      'rgb(199, 193, 178)',
      'rgb(172, 171, 148)',
      'rgb(128, 115, 101)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F02%2F67%2F0267c0f1f98c45c78e1cae16e184ff6a05d84ac0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Ff5%2Ffcf516ff9e3c23f06b0e7f3ea7f119b1bccde06d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc2%2Ff9%2Fc2f9bf548a9b16a155eb6b9b43b8fcc05c57791f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F81%2F30814f8660fd1ef9f7e604f8c84ca22b2016f264.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4d%2F4e%2F4d4ed57af6f0e46350a95b7d7d715d4a4a2c2e08.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/d5/67/d5670a3d18ffaf98798df1903b49fe1927e24264.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Linen-blend Joggers',
    price: 34.99,
    colors: [
      'rgb(232, 233, 231)',
      'rgb(189, 184, 173)',
      'rgb(153, 153, 151)',
      'rgb(184, 184, 163)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F39%2Fc4393910ca308f9ddaac911b60913f9383715c68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2F67%2Fd5670a3d18ffaf98798df1903b49fe1927e24264.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa2%2F85%2Fa2858e8b71707acb14b7c49b34875c09071378db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb5%2F67%2Fb567209fc433eb8d80c0eb63270c5d1c3fc5260b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd2%2F2c%2Fd22c8c9d1dc77c339eeabdbad8536426e96104fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/32/c8/32c8b9412bcc1d9a40a274fdb4c04f446f9de6e1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]',
    name: 'Regular Fit Rib-knit Polo Shirt',
    price: 29.99,
    colors: ['rgb(238, 237, 225)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F32%2Fc8%2F32c8b9412bcc1d9a40a274fdb4c04f446f9de6e1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/53/3a/533aae01771b22b58f60aebc51f02d98cccc4e71.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Linen-blend Polo Shirt',
    price: 29.99,
    colors: ['rgb(176, 179, 133)', 'rgb(237, 233, 215)', 'rgb(57, 58, 69)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F53%2F3a%2F533aae01771b22b58f60aebc51f02d98cccc4e71.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_jumpers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F89%2F6f%2F896f8fec9b29d1633d59b2d6992f428eb3b10802.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_jumpers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/a5/a6/a5a623f274551bfb893a93d0ae4a2bbd53687f69.jpg],origin[dam],category[men_shirts_linenshirts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Linen-blend Overshirt',
    price: 34.99,
    colors: ['rgb(153, 153, 151)', 'rgb(240, 239, 236)', 'rgb(189, 184, 173)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F70%2F14%2F7014716ce52b5c9891a58bfe4d58be36e3288d37.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa5%2Fa6%2Fa5a623f274551bfb893a93d0ae4a2bbd53687f69.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_linenshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F03%2F94%2F0394e7d2a04fc8670946ab8e6215192f7e060fc0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_linenshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/ca/40/ca4011827c3df63b33f27f74591d0a641ede3a35.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Printed T-shirt',
    price: 9.99,
    colors: [
      'rgb(232, 233, 231)',
      'rgb(201, 196, 186)',
      'rgb(255, 255, 255)',
      'rgb(239, 232, 192)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fab%2Ffcab15ef79efde652db3f5951a2dd575c7b7ba0b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7a%2F1a%2F7a1a1b2eab29d6c358db790c46faa3cf590a5928.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fc9%2Ffcc9bdee7352ef78933905dad3ccef9a26078314.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F77%2Fcf%2F77cfb69f17cbbcb7ca99882f2eeb5d84a6933ddf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc3%2F43%2Fc34365710d40866d65d8765e439149e4e13b559e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1e%2F8f%2F1e8fc35d789569ff7c4e141a208f3e0231f5291e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe2%2Fb4%2Fe2b488f870a9306c4057e2c6f154cb3e76544599.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/a8/6f/a86f2a701de9104c8f21d13f99ddc13c0b292659.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Printed T-shirt',
    price: 9.99,
    colors: [
      'rgb(188, 224, 206)',
      'rgb(201, 196, 186)',
      'rgb(255, 255, 255)',
      'rgb(239, 232, 192)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fab%2Ffcab15ef79efde652db3f5951a2dd575c7b7ba0b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7a%2F1a%2F7a1a1b2eab29d6c358db790c46faa3cf590a5928.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fc9%2Ffcc9bdee7352ef78933905dad3ccef9a26078314.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F77%2Fcf%2F77cfb69f17cbbcb7ca99882f2eeb5d84a6933ddf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc3%2F43%2Fc34365710d40866d65d8765e439149e4e13b559e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1e%2F8f%2F1e8fc35d789569ff7c4e141a208f3e0231f5291e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe2%2Fb4%2Fe2b488f870a9306c4057e2c6f154cb3e76544599.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/dd/42/dd423dbd9a5708866e38ca61272e87f17ccbbcaf.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Belted Shorts',
    price: 24.99,
    colors: ['rgb(39, 38, 40)', 'rgb(62, 69, 80)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2F42%2Fdd423dbd9a5708866e38ca61272e87f17ccbbcaf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb6%2F7d%2Fb67d1c6e3880ade3c0780a2a2fa8504e6dab502f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/73/85/73854ac9ab0e7dfa21e6bc5a3213baa8ecefdb1c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Knee-length Shorts',
    price: 29.99,
    colors: ['rgb(151, 143, 197)', 'rgb(58, 58, 61)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F57%2F59%2F5759849e2e59206a5023c026c23e4674afd4860c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F73%2F85%2F73854ac9ab0e7dfa21e6bc5a3213baa8ecefdb1c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/b6/7d/b67d1c6e3880ade3c0780a2a2fa8504e6dab502f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Belted Shorts',
    price: 24.99,
    colors: ['rgb(62, 69, 80)', 'rgb(39, 38, 40)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2F42%2Fdd423dbd9a5708866e38ca61272e87f17ccbbcaf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb6%2F7d%2Fb67d1c6e3880ade3c0780a2a2fa8504e6dab502f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/39/95/39959bff4fb417807e925ab43fdb8ceb662421a5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Color-block Nylon Shorts',
    price: 24.99,
    colors: ['rgb(90, 102, 121)', 'rgb(106, 107, 112)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2F95%2F39959bff4fb417807e925ab43fdb8ceb662421a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2Fa4%2Fe0a4776aad9100416af0d11bdc1ae86f57fecf03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/a4/e0a4776aad9100416af0d11bdc1ae86f57fecf03.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Color-block Nylon Shorts',
    price: 24.99,
    colors: ['rgb(106, 107, 112)', 'rgb(90, 102, 121)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2F95%2F39959bff4fb417807e925ab43fdb8ceb662421a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2Fa4%2Fe0a4776aad9100416af0d11bdc1ae86f57fecf03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/4e/ae/4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg],origin[dam],category[men_shorts],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: '2-pack Regular Fit Sweatshorts',
    price: 24.99,
    colors: ['rgb(175, 175, 175)', 'rgb(158, 172, 189)', 'rgb(146, 141, 160)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbc%2F67%2Fbc670bdc41c05c98849d8954a3ac51f3c10d15fa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc0%2F40%2Fc0401586d882c3287ab12e0fb893935a4532e6bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F4e%2Fae%2F4eae0051f4fe120aa3d1c2c6026849f5dc6aba77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/c4/11/c411d436a7068f43b3caca748fd7d7eb76abb4bc.jpg],origin[dam],category[men_tshirtstanks_multipacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: '5-pack Slim Fit T-shirts',
    price: 34.99,
    colors: [
      'rgb(133, 140, 148)',
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgb(98, 119, 99)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F11%2Fe7%2F11e77c04fd6a3739e83abfb00de2a4823a5b70f7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc5%2F6a%2Fc56aa4d692665cfcbe679ad17327df32f65ae123.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F11%2Fc411d436a7068f43b3caca748fd7d7eb76abb4bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F61%2Ff9%2F61f9ec7ee2ddf793680b60e1a57dc1ec00b3104e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5f%2F90%2F5f9003a645c6d161ab8c5edbd056af8d69bccf62.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/9c/01/9c01a01be97373538788af061a46cd1e16e28e21.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Short-sleeved Linen-blend Shirt',
    price: 24.99,
    colors: ['rgb(218, 218, 205)', 'rgb(130, 158, 195)', 'rgb(174, 158, 124)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3d%2F40%2F3d40a908f7db65fbf34e66e98e30b296bb20ba39.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_shortsleeved%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff9%2F9b%2Ff99bc072e095872384508d4819ed1e468b334a73.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9c%2F01%2F9c01a01be97373538788af061a46cd1e16e28e21.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/10/73/10732d57013a1efae4a71df443fa7715ca81a369.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: '3-pack Regular Fit Crew-neck T-shirts',
    price: 17.99,
    colors: [
      'rgb(202, 211, 213)',
      'rgb(255, 255, 255)',
      'rgb(39, 38, 40)',
      'rgb(87, 119, 154)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F31%2F62%2F3162c493694845330c315fdc51c7e4a347f9157f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fce%2F48%2Fce48aa1703af2ad50d177e16c745d4d9880abbaf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd7%2Fc2%2Fd7c2c9bff5c07e8c548ecc65d983603c0ed23397.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbe%2Fcd%2Fbecdecf3ef58c99e2ee0b24cf6d71e61eb3136bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F10%2F73%2F10732d57013a1efae4a71df443fa7715ca81a369.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/fc/c9/fcc9bdee7352ef78933905dad3ccef9a26078314.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Printed T-shirt',
    price: 9.99,
    colors: [
      'rgb(239, 232, 192)',
      'rgb(201, 196, 186)',
      'rgb(255, 255, 255)',
      'rgb(39, 38, 40)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fab%2Ffcab15ef79efde652db3f5951a2dd575c7b7ba0b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7a%2F1a%2F7a1a1b2eab29d6c358db790c46faa3cf590a5928.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffc%2Fc9%2Ffcc9bdee7352ef78933905dad3ccef9a26078314.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F77%2Fcf%2F77cfb69f17cbbcb7ca99882f2eeb5d84a6933ddf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc3%2F43%2Fc34365710d40866d65d8765e439149e4e13b559e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1e%2F8f%2F1e8fc35d789569ff7c4e141a208f3e0231f5291e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe2%2Fb4%2Fe2b488f870a9306c4057e2c6f154cb3e76544599.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/6d/66/6d661625848e99c075e5b57a32d9f8940c3d9eeb.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Cotton T-shirt',
    price: 12.99,
    colors: [
      'rgb(133, 125, 108)',
      'rgb(62, 69, 80)',
      'rgb(203, 183, 149)',
      'rgb(39, 38, 40)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff6%2F08%2Ff60839f17050f45683e2c5d5c6cf9e1feefc0a65.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa7%2F19%2Fa719f9e6f9679c0a61bb0d5fc74f8f6eddabdcee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fac%2F68%2Fac68fe5a4e1558b72be4174973d9a2ba60fa9233.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F34%2Fa2%2F34a2a1be06bd64d01c2bc4f88636c53fb1be3176.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2Ff1%2F0cf1260c1da7726765cc6a66e046c23c06016a03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2Faf%2Fe5af0ce1b94d4bc4a97ec6cc601da3bc5ce42dd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F29%2F95%2F2995a5dc3ac44304051149d5bac80d8a3bffe988.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/39/57/39571d609c1f7241e63ef5cd96fe2196a093e64f.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Fine-knit Resort Shirt',
    price: 49.99,
    colors: ['rgb(39, 38, 40)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2F57%2F39571d609c1f7241e63ef5cd96fe2196a093e64f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/dd/3e/dd3e47e1d6c7285c0a2e6ad00a79d577757e1330.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Hybrid Regular Denim Shorts',
    price: 29.99,
    colors: ['rgb(46, 46, 48)', 'rgb(136, 152, 172)', 'rgb(76, 81, 100)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2F3e%2Fdd3e47e1d6c7285c0a2e6ad00a79d577757e1330.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F25%2Ffe%2F25fea16c3c0c382e736572d82ad9fa42a470205e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2F28%2Fa9289a343f8f9d860a230896a99a2adce5ac4da5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/12/34/1234f812e4cc4e80288406597da4a2461febdd78.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Linen Overshirt',
    price: 59.99,
    colors: ['rgb(39, 38, 40)', 'rgb(177, 168, 149)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F12%2F34%2F1234f812e4cc4e80288406597da4a2461febdd78.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc1%2Fe6%2Fc1e6573d0a601bf344bc79cc927f9ccc7399093f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/66/1d/661dc82c1025d47bd77b56412251f1816a3a5cb0.jpg],origin[dam],category[men_swimweear],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Swim Shorts',
    price: 14.99,
    colors: [
      'rgb(133, 120, 163)',
      'rgb(39, 38, 40)',
      'rgb(45, 50, 63)',
      'rgb(134, 137, 100)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa4%2F2e%2Fa42e24cab0400c7f6b82d8c9565120766acd019d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F31%2Ff0%2F31f06af2763bcabd30d0d73dddae87a0feb1fd15.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc6%2F57%2Fc657d5650effbf8e243b2fc18007e088e2371b03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F84%2F9e%2F849e8f2965db9b89b9d8771e687eb1bdb32ecdeb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F18%2F03%2F18036f71a6c5a066b4b364ed87694fac25a57b03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F66%2F1d%2F661dc82c1025d47bd77b56412251f1816a3a5cb0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F00%2Fbd%2F00bd4ab64d3a9fe496d088cc2b80a14fa4fd8ead.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/d2/2c/d22c8c9d1dc77c339eeabdbad8536426e96104fb.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Linen-blend Joggers',
    price: 34.99,
    colors: [
      'rgb(90, 102, 121)',
      'rgb(189, 184, 173)',
      'rgb(232, 233, 231)',
      'rgb(153, 153, 151)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc4%2F39%2Fc4393910ca308f9ddaac911b60913f9383715c68.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2F67%2Fd5670a3d18ffaf98798df1903b49fe1927e24264.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa2%2F85%2Fa2858e8b71707acb14b7c49b34875c09071378db.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb5%2F67%2Fb567209fc433eb8d80c0eb63270c5d1c3fc5260b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd2%2F2c%2Fd22c8c9d1dc77c339eeabdbad8536426e96104fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/7e/51/7e51ebe562a0ebbccd1f5f73302405b157741d88.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Regular Fit Short-sleeved Shirt',
    price: 17.99,
    colors: ['rgb(110, 98, 85)', 'rgb(255, 255, 255)', 'rgb(175, 191, 223)'],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F32%2Fda%2F32daff23bd4934e2f573e0f07fc1a3b81dedd5c6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3f%2F38%2F3f38d924365e9ecd0ecb61e940c2ea425c2de6ec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7e%2F51%2F7e51ebe562a0ebbccd1f5f73302405b157741d88.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/9a/2d/9a2d94e16d51a82719d536d372521fdecdda9657.jpg],origin[dam],category[men_tshirtstanks_multipacks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: '2-pack Regular Fit Tank Tops',
    price: 12.99,
    colors: [
      'rgb(111, 131, 131)',
      'rgb(255, 255, 255)',
      'rgb(39, 38, 40)',
      'rgb(156, 180, 215)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2Ff5%2Fa9f57c39f6bef6bc2e15258d0487616144653bd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2Fe2%2Fd5e281c119017ba3c863d54a374628ebd92fcc77.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_tanks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9a%2F2d%2F9a2d94e16d51a82719d536d372521fdecdda9657.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7d%2F73%2F7d734774f9bc4f3032e452d8890818b17b86562c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/91/8d/918dbb8cdbd70d32fbd70dfd991bdb9bbe2adcaf.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit T-shirt',
    price: 12.99,
    colors: [
      'rgb(200, 200, 200)',
      'rgb(178, 190, 217)',
      'rgb(255, 255, 255)',
      'rgb(164, 155, 139)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2Fda%2Fe0da2260cf9b19bf676d1aab514742b2ec1ecf74.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F48%2Fb1%2F48b1abd3d9aae252d83f521a27240d6bb08d3dab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3c%2F73%2F3c73bd910618d8546bbc01e25b4f2b246baf4557.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0a%2F32%2F0a324d18dec82b7d20de734ff0d805eda5235c47.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F91%2F8d%2F918dbb8cdbd70d32fbd70dfd991bdb9bbe2adcaf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
  {
    img: 'https://lp2.hm.com/hmgoepprod?set=source[/92/cf/92cfef1a623faac2cbfd79a2bfebad208a861dbb.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    name: 'Relaxed Fit Cotton T-shirt',
    price: 12.99,
    colors: [
      'rgb(39, 38, 40)',
      'rgb(62, 69, 80)',
      'rgb(203, 183, 149)',
      'rgb(39, 38, 40)',
    ],
    showCase: [
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff6%2F08%2Ff60839f17050f45683e2c5d5c6cf9e1feefc0a65.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa7%2F19%2Fa719f9e6f9679c0a61bb0d5fc74f8f6eddabdcee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fac%2F68%2Fac68fe5a4e1558b72be4174973d9a2ba60fa9233.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F34%2Fa2%2F34a2a1be06bd64d01c2bc4f88636c53fb1be3176.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2Ff1%2F0cf1260c1da7726765cc6a66e046c23c06016a03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2Faf%2Fe5af0ce1b94d4bc4a97ec6cc601da3bc5ce42dd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
      '//lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F29%2F95%2F2995a5dc3ac44304051149d5bac80d8a3bffe988.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_printed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fminiature%5D',
    ],
  },
];

let z = [];

let querys = data.map((product) => {
  z.push(
    `INSERT INTO products (img, name, price, colors, showCase) VALUES ('${
      product.img
    }','${product.name}','${product.price}','{"${product.colors.join(
      '","',
    )}"}','{"${product.showCase.join('","')}"}');`,
  );
});

let logger = fs.createWriteStream('data.sql', {});

z.map((query) => {
  logger.write(`${query}\n`);
});

console.log(z);