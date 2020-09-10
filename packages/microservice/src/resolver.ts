import { ServiceCatalog } from './schema';
export const ServiceCatalogResolver = {
  Query: {
    // queries
    list(root: any, args: any, ctx: any) {
      return [{message: 'GET API for ServiceCatalog microservice'}];
    },
    get(root: any, args: any, ctx: any) {
      // fetch the id from args.id
      return {message: 'GET by ID API for ServiceCatalog microservice'};
    }
  },
  Mutation: {
    // mutations
    create(root: any, args: any, ctx: any) {
      return {message: 'POST API for ServiceCatalog microservice'};
    },
    update(root: any, args: any, ctx: any) {
      /* Optional: if you want to send graphql subscription updates when this query is called) */
      // pubsub.publish(ServiceCatalog_UPDATE, data);
      return {message: 'PUT API for ServiceCatalog microservice'};
    },
    delete(root: any, args: any, ctx: any) {
      return {message: 'DELETE API for ServiceCatalog microservice'};
    },

  }
}
