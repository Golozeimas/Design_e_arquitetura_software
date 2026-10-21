public abstract class CafeDecorator implements Cafe {
    protected Cafe cafeDecorador;

    public CafeDecorator(Cafe cafeDecorador){
        this.cafeDecorador = cafeDecorador;
    }

    @Override
    public String getDescricao(){
        return cafeDecorador.getDescricao();
    }

    @Override
    public double getPreco(){
        return cafeDecorador.getPreco();
    }
}
