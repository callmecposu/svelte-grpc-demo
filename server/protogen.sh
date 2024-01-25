npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/protos/out \
--grpc_out=./src/protos/out \
--ts_out=./src/protos/out \
--proto_path=./src/protos/src \
./src/protos/src/post/post.proto \
&& cp -r ./src/protos/out ../client/src/protos