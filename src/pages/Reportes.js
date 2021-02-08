import React from "react";
import "./Cartera.css";
import TablaReportes from "../components/TablarReportes";
import {
    Button,
  } from '@material-ui/core'


const Reportes = () => {
    const columnas = {
        historial_reportes : [
          {
            title: 'Imagen de perfil',
            field: 'imagen', 
            render: rowData => <img src={rowData.imagen} style={{width: 35, borderRadius: '50%'}}/>
          },
          {
            title: 'Detalles de Operación',
            field: 'detalles',
          },
          {
            title: 'Nombre de cliente',
            field: 'nombre',
          },
          {
            title: 'Fecha',
            field: 'fecha',
          },
          {
            title: 'Estado',
            field: 'estado',
          },
        ],
      }

    const data = {
        operacion : [
          {detalles: "Venta de mi casa en maicra" , nombre: "Steve", fecha: "20/20/20", estado: "cerrado",imagen:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhITEBAQEBMPERAWFRIQEA8WEhgSGREYFhgXFRoYHSggGRolHhkVIzEjJSktLi4uFx81ODMuNygtLysBCgoKDg0OGxAQGjIlHyUrLS0tLS0uLSstLS0tNy0tLS0tLS0tLS0tLS0tLS0tLS0rKy0tLS0tLS0rNS0tKy0tLf/AABEIAKsBJgMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgIECAH/xABBEAACAQIDAwgFCgMJAAAAAAAAAQIDEQQFIQYSMQcTQVFhcYGRIlJ0sbMIFDI1NmNyobTBQqLRIyRTZIKDksLh/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwQFBv/EADARAQACAgECAgkEAQUAAAAAAAABAgMRBCExBRIiMjNRYYGRsdETQXGh8CMkNFLB/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGNxdPA4aVStUhSpwV5TqSjGKXW29EBrOVcpGV5rmTo08VFTTtF1YzpwqP7uU0k9dLcX0XWpG4TqW2koAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDG4yngMNKpWqQpQgrynUlGMUu1sCrdrOWijhb08up/OJ6rn6qlGgn1xjpKf8q7WVm0QtFVQ59tDitosTv4vETrNO8Yuypw/BBejHv49bZjm0yvERCKdn0XuVS23ZXlFx+zG7CFXn6Mbf2FduUUuqEvpQ8NOwvFpVmFzbJ8qWA2h3YSn80ruy5qu0ot9VOf0Zd2j7DJFolSYbzxJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqX5RH1Hg/apfBkVt2Wr3UZexiXL+PcBzitOld5EpY6koxRMQiXWqVN5cNC8RpXb11sI77EZf7Bg/08DIonQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV7ywZfHMMDhL716eJ30o2d2o/RatqnwMeSdQy4qxMqsxuy9DFtuk+Zn1JXpv/T0eHkYItP7ticcT2atmeT1csd5waje29HWHn0dzsWidsVqTCLq1GnYvEMcywPUuh8egHr3YP7EZf7Bg/wBPAuonQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA62ZV3hcuqzXGnSqSXfGLf7ExG5UyW8tZn3Qo7F7QV8VXp1atSU5wqxl6SvBW10S4LTgi3MiK1rr3uf4JkvlzZJyTv0Y+/0YM1x7xOazrzlGEK26t1NuKmoJXv0J7rfj4mtfJW9I6ek9DTH5Om+j5BvESlSgpVpRhvuMY716Wl2utLeXmUnDfyef9k+esTqVbZngJYXGc39JuKa3b6q7XhwL0mJjbWtWYnTqVqMqEkpWu1e1y0TtWY0xkoevdg/sRl3sGD/AE8C6idAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2vqc1sxin9xUXnG37l6etDX5XsL/xKhMTRdamt2W61qvLgbHIwzlrqJcLw7nRxMkzaNxPT4wj61Gf8Wl/JtadHScu2O2OdWh67BysXIjeO2/v9Els9m0sqqJ04qNSKklNxi04SacovptdR4dRX9S1Y6T09zPNK2jUtfzWSq5mqj0apRjZd8tfzJrO66Y5j0tulXwSq6vV2Vk3pxvqTFtK2ptPbHbAz2jxVoVKVNevWkuH3dNaz93aZfLeY3rowfrYYv5PNE2923pLJcAsqyehQUnJYejSpKTSTahBQu10XsZIUmdzt3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA17b6pzeylft5tedWJTJ6ssmL14U00qidtGi2Ll2p0t1j+2lzPB8Wb0sfo2/qfx8vowQe/Fp2dnJNdzsdGs1yV3+0vM5ceTjZfL2tHu/MOrVobsvR07P6Ghm4c73T6O/wPGazWKZ+//b8o+tllSvi72Siopbza63wXFlKcXJPSejZzeMcatYtWdz7vz7v7TGW5fRpSTk7yXBySt4LgvE3sPGx0695+LzvO8U5OeJrXpX3R/wCz3+0fBK18fSw8bynGPnd91uPgbU3rHdx6cfLedVhK7DbcYjFbWUMPzk5UKsppqrZy0pTkt3pjql0mjm8s9Yh6jw79ekxXJbfw7/3PVcpruyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU+UupubN29etTXknL9jHl9Vlw+sqa3NxfTqa7a7I2hLnLtf4lX4sjrcb2cPH+K/8AKt8vtDsV1pc2Jcuksq4kqOENaemt7Mhaek9ULnsdysmumP8A2Zhyd3R4c7rMfF2dgavM7Z4OX+ZpR/5y3P3MVuzo4p1eHp4wOoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSOVSru5ZQj61Zvyg/6mLL2Z8HeVZVFvRsuwwNmUZlK3sGpes6nxJHX40f6cPF+Lz/ALq0fx9oZ6npVLGdz46Rt9qr0r9wlFZ/ZkwUFLBwfXCPuOdHLtS0xMbh6e/guLNSL0nyzMR8Y/KKz6i9+HbvJPxRe/KpMbhh4/hefHaa21r37/yWPZ9LC51h5eriKDv3VYs1bZrWn3Ovj4eOkb7z8XqQzKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAidocgo5/hlGrvJwbcJxdnFu3g1otGVtWLLVtNZ6Kp2m2ZxGz0pzlHnKSTtVgnZK38a/hf5dpgtSYbNckWaNga08DQjCrCcGknaUZRlaXpJtPoad/E7XFwzOGJiXD5/A/WyTes9UpRmq/pJp9xaYmJ6uBmxXxT5bRpzqr0fIiWKvdxyqW9gEuqLXlJo4uaNXl7ziTvDX+HWzxf3am+qTX5f+GNnlFSnzdn6rT8tRBL1ZTlvwT60mbjRcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+NXQHn7lV+3eI7qHwIHZ4nso+aJanCbpyvFtPrRsTET3UvSt41aNwlsDiHXwvpNbylwVk7aWdvM08lfLLzvO40YcvoR6Mx8t9WbI1fBJ9s1/M2cPP68vVcD2FX3O43wi7Jr3MxNtANb9NpiUQ9RZHW+cZLh5+vQoy86aZtw0p7u8SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADz7yq/bvEd1D4EDs8T2UfNEtSNlDnh58zXUrXtdeDKXp540wcjD+tjmm9M+zmOj82lTc0pc7NqLlaVnbh19JwOVSfNvXRv8eYrTypbN9cC+u8X+djTbLoZHkWJzuvuYajKq76tK0I/ik9ETETPZWZivd6N2dwc8vyHD0qji50aFKEt1txvGCTs2ldaG1WNQ07TudpElAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHnvlYlu7dYjuofAgdjizrDHzRLU07o2dofekmBrtZXb737zmWSuXkUyLD7RbP4j53B1uaxMFHenU0jzcZbuj+jfoNPPSsz2Xre0fuubCYWng8OoUoQpwjwjCKjFdyRTSu9swAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHn3lW+3WI7qHwIHZ4nso+aJailY2EOMG96z8yI3vqIGrxfe/ec6yV7fJ2+oMX7TH4MTWzdxbRhSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUJyp4Zz21xDWulHT/ZgdDjcqtK+S31Q0yUXF2at3nRrMWjcIfOkmBr8/pvvfvObKV7fJ3+ocX7VH4MTUzTEz0StkxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpO2GwSzzFyr0qrp1pJXjPWnK0VFcNY6JdfcBVuebP18pqbuJoyiuiXGD/DJaeHEvTJak7rOhB1cE0/Rd+x8ToYudE9L9PijTV921R9795qZcsTuISvT5PP1HjPao/Aga4tgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx4ihDE0XGcYzjJWcZJOLXamBou0HJpRxLc8JPmJcebld0m+zph+a7AILZbkYpUZqpmNXnpXvzFFyjSWt7TnpKfhurvAtPAYGll2FjToU4UqcFZQpxjGK7kgOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="},
          {detalles: "Venta de mi casa en maicra" , nombre: "Steve", fecha: "20/20/20", estado: "cerrado",imagen:"data:image/jpeg;base64,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"},
          {detalles: "Venta de mi casa en maicra" , nombre: "Steve", fecha: "20/20/20", estado: "cerrado",imagen:"data:image/jpeg;base64,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"},
          {detalles: "Venta de mi casa en maicra" , nombre: "Steve", fecha: "20/20/20", estado: "cerrado",imagen:"data:image/jpeg;base64,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"},
          {detalles: "Venta de mi casa en maicra" , nombre: "Steve", fecha: "20/20/20", estado: "cerrado",imagen:"data:image/jpeg;base64,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"},
        ],
    }    

    return (
        <div className={"fondo"}>
            <div className={"container-menu"}>
                <div>
                    <TablaReportes columnas={columnas.historial_reportes} data={data.operacion} titulo="Historial de Operaciones" />
                </div>
                <div className={"pie-propiedades"}>
                    <Button variant = "contained" color = "primary">Imprimir recibo de honorarios</Button>
                    <h4>Honorarios Calculados: 2.654,38$</h4>
                </div>
            </div>    
        </div>
    );
};

export default Reportes;