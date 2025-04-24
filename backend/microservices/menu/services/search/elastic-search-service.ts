export interface IElasticsearchService {
    // Creates an index with mapping
    createIndex(index: string, mapping: any): Promise<void>;

    // Indexes a document
    indexDocument(index: string, id: string, document: any): Promise<void>;

    // Bulk indexes documents
    bulkIndex(index: string, documents: any[]): Promise<void>;

    // Performs a search
    search(index: string, query: any): Promise<any>;

    // Deletes a document
    deleteDocument(index: string, id: string): Promise<void>;

    // Updates a document
    updateDocument(index: string, id: string, doc: any): Promise<void>;
}