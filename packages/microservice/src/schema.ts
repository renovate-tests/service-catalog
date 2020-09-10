import { Document, Model, model, Schema } from 'mongoose';

export const ServiceCatalogSchema: Schema = new Schema({
});

interface ServiceCatalogModel extends ServiceCatalogType , Document { }

interface ServiceCatalogModelStatic extends Model <ServiceCatalogModel> { }

export const ServiceCatalog: Model<ServiceCatalogModel> = model<ServiceCatalogModel, ServiceCatalogModelStatic>('ServiceCatalog', ServiceCatalogSchema);
