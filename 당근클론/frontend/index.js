const calcTime = (timestamp) => {
    const curTime = new Date().getTime() - 9*60*60*1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    if(hour>0) return `${hour}시간 전`;
    else if(min>0) return `${min}분 전`;
    else if(sec>0) return `${sec}초 전`;
    else return `방금 전`;
};

const renderData = (data) =>{
    const main = document.querySelector('main');
    data.reverse().forEach(async obj=>{
        const itemList = document.createElement('div');
        itemList.classList.add('item-list');

        const itemImgWrap = document.createElement('div');
        itemImgWrap.classList.add('item-list__img');

        const itemImg = document.createElement('img');
        const res = await fetch(`/images/${obj.id}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        itemImg.src = url;

        console.log(blob)

        if(!obj.image){
            itemImg.remove();
            itemImgWrap.classList.add('no-image');
        }else{
            itemImgWrap.appendChild(itemImg);
        }

        const itemListInfo = document.createElement('div');
        itemListInfo.classList.add('item-list__info');

        const infoTit = document.createElement('div');
        infoTit.classList.add('item-list__info-title');
        infoTit.innerText = obj.title;

        const infoMeta = document.createElement('div');
        const time = calcTime(obj.insertAt);
        infoMeta.classList.add('item-list__info-meta');
        infoMeta.innerText = `${obj.place} ${time}`;

        const infoPrice = document.createElement('div');
        infoPrice.classList.add('item-list__info-price');
        infoPrice.innerText = obj.price;

        itemListInfo.appendChild(infoTit)
        itemListInfo.appendChild(infoMeta)
        itemListInfo.appendChild(infoPrice)

        itemList.appendChild(itemImgWrap);
        itemList.appendChild(itemListInfo);

        main.appendChild(itemList)
    })
}

const fetchList = async () => {
    const res = await fetch('/items');
    const data = await res.json();
    renderData(data)
}

fetchList()