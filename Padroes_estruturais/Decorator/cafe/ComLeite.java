public class ComLeite extends CafeDecorator{
    public ComLeite(Cafe cafeDecorator){
        super(cafeDecorator);
    }

    @Override
    public String getDescricao(){
        return cafeDecorador.getDescricao() + ", com leite";
    }

    @Override
    public double getPreco(){
        return cafeDecorador.getPreco() + 2.00;
    }
}
