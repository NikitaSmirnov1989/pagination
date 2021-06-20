# <center><span style="color: black; font-size: 30px">Постраничная пагинация списка покемонов</span></center>

## <span style="color: black; font-size: 24px">Описание игры</span>
<span style="color: black; font-size: 16px; line-height: 1.5">В данном приложении происходит запрос на API https://pokeapi.co/api/v2/pokemon?offset=6&limit=6, в котором хранится информация о покемонах. Под списком есть две кнопки - Prev/Next. С их помощью можно перемещаться по списку покемонов. За один рендер на странице выводится список ul из 6 вложенных имен покемонов. Каждый покемон находится внутри отдельного компонента __Pokemon__
При каждом нажатии на кнопку Prev/Next происходит обращение при помощи fetch к API-покемонов, после чего происходит повторный рендер списка покемонов. При этом в момент обращения кнопки блокируются, с присвоением аттрибуту disabled = true до того момента, как данные не будут отрисованы.</span>


-----

## <span style="color: black; font-size: 24px">Используемые технологии</span>
<span style="color: black; font-size: 16px; line-height: 1.5">В данной работе я использовал только HTML, CSS и REACT
</span>


## <span style="color: black; font-size: 24px">Здесь можно просмотреть как работает</span>
https://nikitasmirnov1989.github.io/guess_the_field/
</span>