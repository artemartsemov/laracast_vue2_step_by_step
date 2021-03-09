<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2" v-for="status in statuses">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <p>{{ status.user.name }}   said....</p>
                        <p>
                            A moment ago....
                        </p>

                        <p>
                            {{ status.created_at | ago | capitalize }}
                        </p>
                    </div>
                    <div class="panel-body" v-text="status.body">
                    </div>

                    <add-to-stream>

                    </add-to-stream>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import moment from 'moment';
    import Status from '../js/models/Status';
    import AddToStream from "../js/components/AddToStream";

    export default {
        components: { AddToStream },
        data (){
            return {
                statuses: [],
            }
        },
        created() {
            Status.all()
                .then(({data}) => this.statuses = data)

        },

        filters: {
            ago(date){
                return moment(date).fromNow();
            },
            capitalize(data){
                return data.toUpperCase();
            }
        },

        mounted(){
            console.log('Component mounted');
        },

        methods: {
            postedOn(status){
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
