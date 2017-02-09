import test from 'ava';
import hexToHsl from '../index';

test('converts black', t => {
	t.deepEqual(hexToHsl('#000000'), [0, 0, 0]);
});
test('converts white', t => {
	t.deepEqual(hexToHsl('#ffffff'), [0, 0, 100]);
});
test('converts grey', t => {
	t.deepEqual(hexToHsl('#AAAAAA'), [0, 0, 66]);
});
test('converts white uppercase', t => {
	t.deepEqual(hexToHsl('#FFFFFF'), [0, 0, 100]);
});
test('converts grey uppercase', t => {
	t.deepEqual(hexToHsl('#aaaaaa'), [0, 0, 66]);
});

test('converts black shorthand', t => {
	t.deepEqual(hexToHsl('#000'), [0, 0, 0]);
});
test('converts white shorthand', t => {
	t.deepEqual(hexToHsl('#fff'), [0, 0, 100]);
});
test('converts grey shorthand', t => {
	t.deepEqual(hexToHsl('#aaa'), [0, 0, 66]);
});
test('converts white shorthand uppercase', t => {
	t.deepEqual(hexToHsl('#fff'), [0, 0, 100]);
});
test('converts grey shorthand uppercase', t => {
	t.deepEqual(hexToHsl('#aaa'), [0, 0, 66]);
});
