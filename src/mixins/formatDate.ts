import moment from "moment";

export default {
    methods: {
        formatDate( date: string, format: string = 'DD/MM/YYYY' ): string {
            return moment( date ).format( format );
        }
    }
}