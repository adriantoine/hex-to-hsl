import test from 'ava';
import hexToHsl from '../index';

test('converts blue', t => {
	t.deepEqual(hexToHsl('#0593FF'), [206, 100, 51]);
});

test('converts green', t => {
	t.deepEqual(hexToHsl('#00C176'), [157, 100, 38]);
});

test('converts orange', t => {
	t.deepEqual(hexToHsl('#FF8A00'), [33, 100, 50]);
});

test('converts purple', t => {
	t.deepEqual(hexToHsl('#A900C7'), [291, 100, 40]);
});

test('converts red', t => {
	t.deepEqual(hexToHsl('#FF003C'), [346, 100, 50]);
});
