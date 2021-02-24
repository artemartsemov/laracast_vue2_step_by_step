/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

class Errors{
    constructor() {
        this.errors = {};
    }
    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }else{
            return false
        }
    }
    record(errors){
        this.errors = errors
    }
    clear(field){
        if(field){
            delete this.errors[field];
            return
        }

        this.errors = {};
    }
    any(){
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for(let field in data){
            this[field] = data[field];
        }

        this.errors = new Errors();
    }
    reset(){
        for(let field in this.originalData){
            this[field] = '';
        }
    }

    data(){
        let data =  Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    submit(requestType, url ){
        return new Promise((resolve,reject) => {

            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                  this.onFail(error.responce.data);

                  reject(error.responce.data)
                })
        });
    }

    onSuccess(data){
        alert(data.message);
        this.errors.clear();
    }

    onFail(error){
         this.errors.record(error)
    }

}


const app = new Vue({
    el: '#main',

    data :{
        form: new Form({
            name   : '',
            description : ''
        }),
        errors : new Errors()
    },

    methods: {
        onSubmit(){
                this.form.submit('post', '/projects')
                .then(data => console.log(data))
                .catch(errors => console.log(errors))
        }
    }
});
