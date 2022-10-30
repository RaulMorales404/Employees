import { useState, useEffect } from 'react';
export const useUpload = () => {

    const [allFile, setAllFile] = useState<[]>([]);
    const [preViewImage, setPreViewImage] = useState<any>([]);
    const [resultViewImage, setResultViewImage] = useState<any>([]);

    const handleChange = (file: any) => {
        setAllFile(file);
    };
    const createLocalStora = () => {
        if (preViewImage[0] !== undefined) {
            localStorage.setItem('images', JSON.stringify(preViewImage));
            setResultViewImage([]);
            setPreViewImage([]);
            setAllFile([]);
            let getDataStoreImage: any = localStorage.getItem('images');
            getDataStoreImage = JSON.parse(getDataStoreImage);
        }
    }

    useEffect(() => {
        getImageLocalStore();
        geyImagePrevio();
    }, [allFile])

    useEffect(() => {
        showImage();
    }, [preViewImage])

    const geyImagePrevio = () => {
        let createImageas: object[] = [];
        Object.values(allFile)?.map((item) => {
            const newFile = new FileReader();
            newFile.readAsDataURL(item);
            newFile.onload = (event) => {
                event.preventDefault();
                createImageas.push({
                    "name": item["name"],
                    "url": event.target?.result,
                    "data": item
                });
                setPreViewImage(createImageas);
            }
        });
    }
    const showImage = () => {
        let result = preViewImage?.map((item: any, index: number) => (
            <div key={index} className="col-md-12 image-previws">
                <div className='delete-image' onClick={() => deleteImage(index)}>
                    <span className='delete-span'>x</span>
                </div>
                <img className="img-upload" src={item.url} alt="img" />
                <div className='title-image'>
                    <p className='title-previw-image'>{item.name}</p>
                </div>
            </div>
        ))
        setResultViewImage(result);
    }

    const deleteImage = (id: number): void => {
        delete preViewImage[id];
        setPreViewImage(preViewImage);
        showImage();
    }
    const getImageLocalStore = () => {
        let array: any = localStorage.getItem('images');
        array = JSON.parse(array);
        const result = array?.map((item: any, index: number) => (
            <>
                {index > 0 ?
                    <div key={index} className="carousel-item" data-bs-interval="2000">
                        <img src={item['url']} className="d-block w-100" alt="..." />
                    </div> :
                    <div key={index} className="carousel-item active" data-bs-interval="10000">
                        <img src={item['url']} className="d-block w-100" alt="..." />
                    </div>
                }
            </>
        ))
        return result;
    }
    return {
        handleChange,
        resultViewImage,
        preViewImage,
        createLocalStora,
        getImageLocalStore,
    }
}