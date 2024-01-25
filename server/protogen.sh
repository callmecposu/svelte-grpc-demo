npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/protos/out \
--grpc_out=./src/protos/out \
--ts_out=./src/protos/out \
--proto_path=./src/protos/src \
./src/protos/src/post/post.proto \
# clear the src protos in the client folder
rm -r ../client/src/protos/src
# copy the proto source files to the client folder 
cp -r ./src/protos/src ../client/src/protos
# run the client protogen script
# ../client/protogen.sh