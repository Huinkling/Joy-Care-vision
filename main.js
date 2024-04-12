document.getElementById('background3D').addEventListener('click', function () {
    // 使用A-Frame的setAttribute方法来控制可见性
    var scene = document.getElementById('blue_planet');
    scene.setAttribute('visible', true); // 设置A-Frame场景为可见
    scene.style.display = 'block'; // 确保CSS不会阻止其显示
});



