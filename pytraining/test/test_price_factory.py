# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#

from unittest import TestCase

from pytraining.src.price_factory import PriceFactory


class TestPriceFactory(TestCase):

    def setUp(self):
        self._factory = PriceFactory()

    def test_create_price_from_amount(self):
        """should create price from amount."""

        price = self._factory.create_price_from_amount(amount=10.504, currency='USD')

        self.assertEqual(10.5, price.amount)
        self.assertEqual(1050, price.coefficient)
        self.assertEqual(-2, price.exponent)
        self.assertEqual('USD', price.currency)
