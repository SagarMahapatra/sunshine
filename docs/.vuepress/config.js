module.exports = {
    title: 'Kanasina Thota',
  	description: 'Dream Farmland',
    base: '/kanasina-thota/',
    dest: 'public',
    themeConfig : {
    logo: '/images/logo/logo.png',
      nav : [
        { text : 'Dream', link : '/dream/'},
        { text : 'KT', link : '/kt/'},
        { text : 'Read', link : '/references/'},
        { text : 'Farms', link : '/farm_visits/'},
        { text : 'About Us', link : '/about/'},
      ],
      sidebar: {
      // '/recipes/pickle/': [
      //   '',
      //   'pickle',     /* /foo/ */
      //   'pickle-2',  /* /foo/one.html */
      //   'pickle-3',
      //   'pickle-4',
      //   'pickle-and-others',

      // ],
      '/kt/': [
        '/',

       ],

      '/farm_visits/': [
        'Devarakaadu_Farm_Visit',
        'Timbaktu_an_alternate_universe'

       ],

       '/references/': [
        'Resources_Natural_Building',
        'Resources_Permaculture',
        'Resources_Water_Conservation',
        'Inspirational_Stories',

       ],
      // '/medicines/': [
      //   'chavyanprash',      /* /bar/ */
      //   'alovera', /* /bar/three.html */
      // ],

      // // fallback
      // '/poems/': [
      //   'halarda', /* /contact.html */
      // ]
     }
  }
}