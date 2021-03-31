import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GuardsCheckStart } from "@angular/router";
import { CategoriasService } from "./services/categorias.service";
import { EventosService } from "./services/eventos.service";
import { PersonasService } from "./services/personas.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  categoriaForm: FormGroup;
  categorias: any;

  constructor(
    public formBuilder: FormBuilder,
    public categoriaService: CategoriasService,
    public eventoService: EventosService,
    public personaService: PersonasService
  ) {}

  ngOnInit(): void {
    this.categoriaForm = this.formBuilder.group({
      nombre: ["", Validators.required],
    });

    this.categoriaService.buscarTodas().subscribe(
      (respuesta) => {
        this.categorias = respuesta;
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {}
}
