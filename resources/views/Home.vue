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
                            {{ postedOn(status) }}
                        </p>
                    </div>
                    <div class="panel-body" v-text="status.body">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import moment from 'moment';
    import Status from '../js/models/Status';

    export default {
        data (){
            return {
                statuses: [],
            }
        },
        created() {
            Status.all()
                .then(({data}) => this.statuses = data)

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
