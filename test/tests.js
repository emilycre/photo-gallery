import './html-equal.js';

const test = QUnit.test;

function makeImageTemplate(image) {
    const html = 
    `
<li>Unicorn Head
        <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg">
        </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create a test that displays listed HTML images dynamically', function(assert) {
    //Arrange
    const image = `
    <li>Unicorn Head
    <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg">
    </li>`;

    //Act
    const dom = makeImageTemplate(image);
    
    //Assert
    assert.htmlEqual(dom, `
    <li>Unicorn Head
            <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg">
    </li>`);
});