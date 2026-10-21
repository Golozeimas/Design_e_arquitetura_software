public class Main {
    public static void main(String[] args) {
        Cafe meuCafe = new CafeSimples();
        meuCafe = new ComLeite(meuCafe);
        

        System.out.println(meuCafe.getDescricao());
        System.out.println(meuCafe.getPreco());
    }
}
