function getCartSum(cart, random = Math.random) {
    let sum = cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    return random() < 0.1 ? sum / 2 : sum;
};

describe('getCartSum', () => {
    let cart;
    let random;

    beforeEach(() => {
        cart = [
            {price: 20},
            {price: 20}
        ];
    })

    describe('When I\'m unlucky', () => {
        beforeEach(() => {
            random = () => 0.1;
        })

        it("should return 40 when I have 2 product at 20$", () => {
            expect(getCartSum(cart, random)).toBe(40);
        });

        it("should return 0 when I have 0 product", () => {
            cart.pop();
            cart.pop();

            expect(getCartSum(cart, random)).toBe(0);
        });

        it("should return 10 when I have 2 product at 5$", () => {
            cart[0].price = 5;
            cart[1].price = 5;

            expect(getCartSum(cart, random)).toBe(10);
        });
    });

    it("should give a 50% discount when I\'m lucky", () => {
        let random = () => 0.05;
        expect(getCartSum(cart, random)).toBe(20);
    });
});
