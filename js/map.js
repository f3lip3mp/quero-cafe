class Map {
	currentLat=0
	currentLng=0
	currentZoom=0
	map=null
	marker = null
	constructor(targetElement,props){
		this.elementHTML = targetElement
		this.setCoord(props.coord)
		this.setZoom(props.zoom)
		this.init()
	}
	init(targetElement,props){
		this.map = new google.maps.Map(this.elementHTML,{
			center:{lat: this.currentLat,lng:this.currentLng},
			zoom:this.currentZoom
		})
		this.initEvents()

	}
	setCoord({lat,lng}){
		this.currentLat = lat
		this.currentLng = lng
	}
	setZoom(zoom){
		this.currentZoom = zoom
	}
	getCoord(){
		return {lat: this.currentLat,lng:this.currentLng}
	}
	newMarker(coord){
		let initialPosition = coord ? coord : (this.getCoord()) 
		this.marker = new google.maps.Marker({
			position: initialPosition,
			map: this.map,
		});
	}
	setMapPosition({lat, lng}){
		console.log({lat,lng})
	}
	initEvents(){
		this.map.addListener("drag",this.handleDrag.bind(this))
		this.map.addListener("click",this.handleClick.bind(this));
	}
	handleClick(event){
		this.marker.setPosition(event.latLng);
	}
	handleDrag(event){
		this.setCoord({lat: this.map.getCenter().lat(),lng:this.map.getCenter().lng()})
		this.marker.setPosition(this.getCoord());
	}
}
