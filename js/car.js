let autos=[
    {marca:'Chevrolet',modelo:'Corolla',placa:'LBA-4512',año:'2015'}
];



const app = Vue.createApp({
    
    data(){
        return{
           
            lista:autos,
            marca:'',
            modelo:'',
            placa:'',
            anio:''
        };
    },
    methods:{
       
        agregarAuto(event){
            console.log(autos);
          const nuevoAuto={
            marca:this.marca,
            modelo:this.modelo,
            placa:this.placa,
            anio:this.anio
          }
          console.log('------ Agregando: '+nuevoAuto.marca);
          this.limpiar();
          
          this.lista.unshift(nuevoAuto);
       },
       limpiar(){
           this.marca='',
           this.modelo='',
           this.placa='',
           this.anio=''
       }
    }
})

app.mount('#regAuto')