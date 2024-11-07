import {createRenameFieldTransform, createRenameTransform, defineConfig, loadGraphQLHTTPSubgraph} from '@graphql-mesh/compose-cli'
import {loadOpenAPISubgraph} from '@omnigraph/openapi'
import {loadGrpcSubgraph} from '@omnigraph/grpc'

export const composeConfig = defineConfig({
    subgraphs: [
        {
            sourceHandler: loadOpenAPISubgraph('Pets', {
                // no endpoint because openAPI lists the endpoint in the spec sheet
                source: './services/pet-api/specs.yaml'
            })
        },
        {

            sourceHandler: loadGrpcSubgraph('Stores', {
                endpoint: 'localhost:50051',
                source: './services/store-api/petstore.proto' // only needed when not running reflection
            }),
            transforms: [
                createRenameTransform({
                    // Rename types
                    typeRenamer(opts) {
                        if (opts.type.name.startsWith('petstore__')) {
                            return opts.typeName.replace('petstore__', '')
                        }
                        return ''
                    },
                }),
                createRenameFieldTransform(({fieldName, typeName}) =>
                    typeName === 'Query' && fieldName.startsWith('petstore_PetStoreService_') ? fieldName.replace('petstore_PetStoreService_', '') : fieldName
                )
            ]
        },
        {
            sourceHandler: loadGraphQLHTTPSubgraph('Locations', {
                endpoint: 'http://localhost:3001'
            })
        }
    ]
})