
import { FileUploader } from "react-drag-drop-files";
import { Header } from "../header"
import { Slider } from './slider';
import './styles.css';
import { useUpload } from '../customHooks/useUpload/useUpload';
const fileTypes = ["JPEG", "PNG", "GIF"];

export const Upload = () => {

    const { handleChange,
        resultViewImage,
        preViewImage,
        createLocalStora,
        getImageLocalStore, } = useUpload()

    return (
        <div className="container">
            <div className="row">
                <Header activeButton={false} />
            </div>
            <div className="row mt-5">
                <p className="fs-3 mt-3">Subir imágenes</p>

            </div>
            <div className="row">
                <div className="col-md-3  col-ms-8">
                    <div className='col-md-12 fileUloader col-ms-8'>
                        <FileUploader
                            label="Upload or drop a file right here"
                            multiple={true}
                            hoverTitle="Soltar"
                            handleChange={handleChange}
                            name="file"
                            maxSize={5}
                            types={fileTypes}
                        >
                            <div className="col-md-12">
                                <div className="mt-5 size-Image">
                                    <img className="img-upload" src={require('../../assets/undraw_Upload_re_pasx.png')} alt="img" />
                                </div>
                                <p>Arrastrar y Suelta imágenes</p>
                            </div>
                        </FileUploader>
                    </div>
                    <div className='col-md-12 mt-2'>
                        {resultViewImage}
                        {preViewImage.length ? <div className='col-md-12 button-save'>
                            <button className='btn btn-primary' onClick={createLocalStora}>Guardar</button>
                        </div> : null}
                    </div>
                </div>
                {getImageLocalStore() ? <div className="col-md-8 col-ms-8 slider">
                    <Slider action={getImageLocalStore} />
                </div> :
                    <div className="col-md-8 default col-ms-8 slider">
                        <img className="img-upload default" src={require('../../assets/undraw_Image_viewer_re_7ejc.png')} alt="img" />
                    </div>
                }
            </div>
        </div>
    )

}

