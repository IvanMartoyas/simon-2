<template>
    <div>
        <h2>Технические моменты</h2>
        <h3>Стилистика</h3>
        <p>Стили написаны на препроцессоре SASS</p>
        <p>Крупную стилистику вынес в отдельные файлы чтобы не засорять компоненты, импортирую их через @import ./assets/style/app_style.sass </p>


        <h3>Layouts </h3>
        <p>
            Для удобства поддержки компоненты разбил на лояуты они меняются динамически в зависимости от настроек заданных в роутере { path: '/home', component: Home, meta: {layout: 'Default'} }. 
            В App.vue через computed принимаю значение выбранного  в роутере лояута из meta.
        </p>
       <p>
            Чтобы можно было удобно подставлять  один header на многие лояуты вынес header с footer  в отдельную  папку components/header-footer
       </p>
<pre>
    computed: {
        layout() {
            return (this.$route.meta.layout || 'Default')
        },
    }

</pre> 
       <p>Для вывода нужного компонента использую динамический компонент.</p>
<pre>
    &lt;component :is="layout"&gt;
        &lt;router-view/&gt;
    &lt;/component&gt;

</pre> 
    </div>
</template>