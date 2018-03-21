# -*- coding: utf-8 -*-
#
# (c) 2013-2018 Wishtack
#
# $Id: $
#
import math

from pytraining.src.price import Price


class PriceFactory(object):

    def create_price_from_amount(self, amount, currency):

        price = Price()

        exponent = -2

        coefficient = amount / math.pow(10, exponent)

        # Rounding coefficient 1050.5 => 1050.
        coefficient = round(coefficient)

        price.amount = coefficient * math.pow(10, exponent)
        price.coefficient = coefficient
        price.currency = currency
        price.exponent = exponent

        return price
