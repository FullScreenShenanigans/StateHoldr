/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/StateHoldr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets collectionKeyRaw", (): void => {
    // Arrange
    const StateHolder: StateHoldr.IStateHoldr = mocks.mockStateHoldr();

    // Act
    StateHolder.setCollection("newCollection", mocks.mockCollection());

    // Assert
    chai.expect(StateHolder.getCollectionKeyRaw()).to.equal("newCollection");
});

mochaLoader.addTest("sets collectionKey", (): void => {
    // Arrange
    const StateHolder: StateHoldr.IStateHoldr = mocks.mockStateHoldr({
        prefix: "prefix",
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    StateHolder.setCollection("newCollection", mocks.mockCollection());

    // Assert
    chai.expect(StateHolder.getCollectionKey()).to.equal("prefixnewCollection");
});

mochaLoader.addTest("sets the collection", (): void => {
    // Arrange
    const StateHolder: StateHoldr.IStateHoldr = mocks.mockStateHoldr();

    // Act
    StateHolder.setCollection("newCollection", mocks.mockCollection());

    // Assert
    chai.expect(StateHolder.getCollection()).to.deep.equal(mocks.mockCollection());
});
