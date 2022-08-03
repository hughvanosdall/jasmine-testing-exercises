describe("Servers test (with setup and tear-down)", () => {
  beforeEach(() => {
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", () => {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add a new server on submitServerInfo() with empty input", () => {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(() => {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
