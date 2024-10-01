import { Component} from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Las buenas decisiones vienen de la experiencia, pero la experiencia viene de malas decisiones',
        autor: 'Mark Twain'
    };

    personajes: string[] = ['Bitcoin', 'Near', 'Render', 'RIO']

}