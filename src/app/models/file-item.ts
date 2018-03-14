export class FileItem {

  public archivo: File;
  public nombreArchivo: string;
  public url: string;
  public estaSubiendo: boolean;
  public progreso: number;
  public tipoArchivo: string;

  constructor( archivo: File) {

    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
    this.estaSubiendo = false;
    this.progreso = 0;
    this.tipoArchivo = this.sacarTipoArchivo(archivo);
  }

  private sacarTipoArchivo( archivo: File ) {
    return archivo.type.split('/')[1];
  }

}