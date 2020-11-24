<template>
  <div>
    <div id="map" style="width:550px;height:500px;"></div>
    <ul>
      <li v-for="item in aptlist" v-bind:key="item">
        {{ si }} {{ gugun }} {{ dong }} {{ item.도로명 }} {{ item.아파트 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KakaoMap',
  data() {
    return {
      container: Document,
      map: Object,
    };
  },
  props: {
    aptlist: Array,
    si: String,
    gugun: String,
    dong: String,
  },
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  updated() {
    this.aptlist.forEach((element) => {
      console.log(element.도로명);
      this.addMarker(element.도로명, element.아파트);
    });
  },
  methods: {
    initMap() {
      this.container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      let map = new kakao.maps.Map(this.container, options);
      this.map = map;
      //마커추가하려면 객체를 아래와 같이 하나 만든다.
      var marker = new kakao.maps.Marker({
        position: this.map.getCenter(),
      });
      marker.setMap(this.map);
    },
    addScript() {
      const script = document.createElement('script'); /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b433b7b8f851f9709d26a15fb4fc0660&libraries=services';
      document.head.appendChild(script);
    },
    addMarker(addr, apt) {
      var addrFullName =
        this.si + ' ' + this.gugun + ' ' + this.dong + ' ' + addr;
      var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      }; // 지도를 생성합니다
      var map = new kakao.maps.Map(this.container, mapOption); // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder(); // 주소로 좌표를 검색합니다
      geocoder.addressSearch(addrFullName, function(result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          //var message = 'latlng: new kakao.maps.LatLng(' + result[0].y + ', ';
          //message += result[0].x + ')';
          //var resultDiv = document.getElementById('clickLatlng');
          //resultDiv.innerHTML = message; // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          }); // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">' +
              addrFullName +
              ' ' +
              apt +
              '</div>',
          });
          infowindow.open(map, marker); // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          marker.setMap(map);
          map.setCenter(coords);
        }
      });
    },
  },
};
</script>
