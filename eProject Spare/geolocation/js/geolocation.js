$(function () {

    var canvas = document.getElementById('map-canvas');

    var latlng = new google.maps.LatLng(14.0583, 108.2772);

    var mapOptions = {
        zoom: 6,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var mapObj = new google.maps.Map(canvas, mapOptions);
    var marker = [];
    var infoWindow = [];



    // マーカーデータ
    var markerData = [{
            position: new google.maps.LatLng(35.681382, 139.766484),
            title: 'asd',
            content: 'asd',
            icon: '//drive.google.com/uc?export=view&id=1ir7dzJwVH6gpil5dP1-1fGdfsNPmnrPj',
        },
        {
            position: new google.maps.LatLng(35.681282, 139.779044),
            title: 'asd',
            content: 'asd',
            icon: '//drive.google.com/uc?export=view&id=1ir7dzJwVH6gpil5dP1-1fGdfsNPmnrPj',
        },
        {
            position: new google.maps.LatLng(35.681282, 139.769044),
            title: 'asd',
            content: 'asd',
            icon: '//drive.google.com/uc?export=view&id=1ir7dzJwVH6gpil5dP1-1fGdfsNPmnrPj',
        },
        {
            position: new google.maps.LatLng(35.682382, 139.756084),
            title: 'asd',
            content: 'asd',
            icon: '//drive.google.com/uc?export=view&id=1ir7dzJwVH6gpil5dP1-1fGdfsNPmnrPj',
        }

    ];

    // マーカーの表示
    for (i = 0; i < markerData.length; i++) {
        marker[i] = new google.maps.Marker({
            position: markerData[i].position,
            map: mapObj,
            title: markerData[i].title,
            icon: markerData[i].icon,
        });

        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="name">' + markerData[i]['title'] + '</div>'
        });

        markerEvent(i);
    }

    function markerEvent(i) {
        marker[i].addListener('click', function () {
            infoWindow[i].open(mapObj, marker[i]);
        });
    }

    $('#input-form').submit(function () {
        setAddress($('#address').val());
        return false;
    });

    // 住所検索
    function setAddress(address) {
        var sad = address;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': sad
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                mapObj.setCenter(results[0].geometry.location);
            } else {
                alert('Vui lòng nhập vào vị trí bạn muốn tìm.');
            }
        });
    }

});