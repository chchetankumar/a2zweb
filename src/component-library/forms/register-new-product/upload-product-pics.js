import React from 'react';
import axios from 'axios';
import Button from '../../elements/form-input-button';


export default class UploadPics extends React.Component {

    constructor(props) {
        super(props);
        this.uploadImages= this.uploadImages.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.selectFile = this.selectFile.bind(this);
        this.updateFileStatus = this.updateFileStatus.bind(this);

        this.state = {
            files: {},
        }
    }

    selectFile(e) {
        let files= {};
        let file_list = e.currentTarget.files;
        for ( let i in file_list ){
            files[file_list[i].name]={ name: file_list[i].name,
                status: false,
                file: file_list[i]
            };
        }
        this.setState( {
            files: files,
        });
    }

    uploadImages() {
        let files = this.state.files;
        let promises = [];
        for ( let i in files ) {
            let file = files[i];
            promises.push(this.uploadImage(file));
        }
       Promise.all(promises);
    }

    updateFileStatus (file, status) {
        let currentFileState = this.state.files;
        currentFileState[file].status = status;
        this.setState({files: currentFileState});
    }

    uploadImage( file ) {
        const formData = new FormData();
        formData.append('image', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post("http://localhost:8888/upload-image",formData, config)
                .then( (file) => {
                    this.updateFileStatus(file.name, true);
                })
                .catch( (file) => {
                    this.updateFileStatus(file.name, false);
                });
    }

    render() {
        return (<><div className="row">
                    <input type="file" onChange={this.selectFile} name="image" multiple/>
                    <input type="button" onClick={this.uploadImages} className="btn btn-primary" value="Upload"></input>
                </div>
                <div className="row">
                    <input type="button" onClick={this.props.prev} className="btn btn-primary" value="Prev"></input>
                    <input type="button" onClick={this.props.next} className="btn btn-primary" value="Done"></input>
                </div>
                </>
            );
    }
}