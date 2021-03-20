const initState = {
    products: [ 
        {id: 1, name: 'Sarımsak Soslu Sucuk Sever', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_SUCUKPI/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616168520000", price: 30, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 2, name: 'Süperos', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/DOPDOLU/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616168640000", price: 40, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 3, name: 'Margarita', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/PIZZA/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616168760000", price: 50, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 4, name: 'Bol Malzemos', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_BMPIZ/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169480000", price: 70, desc:"Jambon,Pepperoni,Sucuk,Sossis,Mısır"},
        {id: 5, name: 'Dominos Soslu Bol Malzemos', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_DMNSBLM/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169240000", price: 70, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 6, name: 'Extravaganzza', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/PIZZZ/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169240000", price: 80, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 7, name: 'Italiano', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/PIZMX/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169360000", price: 60, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 8, name: 'Dopdolu Extra', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/YRMYL/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169360000", price: 50, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 9, name: 'Dev Malzemos', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_DMPIZ/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616169480000" , price: 30, desc:"Sucuk,Mozarella Peyniri,Pizza Sos"},
        {id: 10, name: 'Dört Peynirli Pizza', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/DRTM/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616229600000" , price: 74, desc:"Beyaz Peynir,Mozarella Peyniri,Pizza Sos"},
        {id: 11, name: 'Mangal Sucuklu', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_MSCK/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616229360000" , price: 73, desc:"Mozarella Peyniri,Pizza Sos,Yeşil Biber,Mantar"},
        {id: 12, name: 'Et Dönerli', image:"https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/DONERLI/NULL/1170x400/TR?v=116ca47e6a01fb09b87aa3a6df0a2b02-1616229360000" , price: 70, desc:"Mozarella Peyniri,Pizza Sos,Yeşil Biber,Soğan,Domates,Yöresel Lezzetler Baharato"},
           
    ],


 product:{}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;